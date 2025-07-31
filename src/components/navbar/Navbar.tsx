import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://ik.imagekit.io/uhimtlk7c/istockphoto-1180989037-612x612.jpg?updatedAt=1753927853758"
          alt="Logo Petshop"
          className="w-12 h-12 object-contain"
        />
        <span className="text-2xl font-bold text-blue-700">
          Busque o melhor petshop
        </span>
      </div>
      <button
        className="text-blue-700 font-semibold hover:underline transition"
        onClick={() => alert("Você saiu!")}
      >
        Sair
      </button>
    </header>
  );
}

export default Navbar;