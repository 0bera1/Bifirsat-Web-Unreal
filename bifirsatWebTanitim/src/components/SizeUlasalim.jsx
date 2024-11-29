import { useState } from "react";
import emailjs from "emailjs-com"; // EmailJS'i import ediyoruz

function SizeUlasalim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^(?:\+90|0)[1-9][0-9]{9}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailValid = true;
    let phoneValid = true;
    let generalError = "";

    if (formData.email && !validateEmail(formData.email)) {
      emailValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Geçerli bir e-posta adresi girin.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      phoneValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Geçerli bir telefon numarası girin (başında +90 veya 0 olmalı).",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }

    if (!formData.email && !formData.phone) {
      generalError = "E-posta veya telefon numarasından en az birini doldurun.";
    }

    if (emailValid && phoneValid && generalError === "") {
      // Formu EmailJS ile gönderme işlemi
      emailjs
        .send(
          "service_es8nd28", // EmailJS Servis ID
          "template_bifirsat", // EmailJS Template ID
          formData,
          "u2mW2QrEAd5XTLi6P" // EmailJS API Key (User ID)
        )
        .then(
          (response) => {
            alert("Form başarıyla gönderildi!");
            console.log("Başarıyla gönderildi:", response);
            // Formu sıfırlama
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.error("EmailJS gönderim hatası:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
          }
        );
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, general: generalError }));
    }
  };

  return (
    <div id="partner"
    className="min-h-screen flex items-center justify-center bg-transparent py-12 px-6 sm:px-12 mt-60">
      <div className="max-w-lg w-full bg-white/50 backdrop-blur-3xl shadow-2xl rounded-lg drop-shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Bize Ulaşın</h2>
        <p className="text-center text-lg text-gray-800">
          Bizimle iletişime geçmek için aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapacağız.
        </p>

        {errors.general && <div className="text-red-500 text-center">{errors.general}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Adınızı girin"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="E-posta adresinizi girin"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Telefon Numarası</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
              placeholder="Telefon numaranızı girin"
            />
            {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
              rows="4"
              placeholder="Mesajınızı buraya yazın"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-yellow-600 transition duration-300"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SizeUlasalim;
