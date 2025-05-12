import { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Payment Information
      </h1>

      {/* Payment Form */}
      <form className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment-method"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={() => setPaymentMethod("credit-card")}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment-method"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* Card Information */}
        {paymentMethod === "credit-card" && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="1234 5678 9876 5432"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiration Date
                </label>
                <input
                  type="month"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="123"
                required
              />
            </div>
          </>
        )}

        {/* PayPal Option */}
        {paymentMethod === "paypal" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PayPal Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="example@paypal.com"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
