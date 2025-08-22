import React from 'react';

const Abrasifs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Abrasifs</h1>
        <p className="text-gray-600 text-lg mb-10">
          We're working hard to bring you a full list of services. In the meantime, here's a preview of what you can expect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 mt-2">Chez FLGA nous comprenons l’importance d’utiliser des abrasifs de qualité lors des
travaux d’aérogommage. Par ailleurs nous sommes conscients de l’impact
environnemental de nos activités, c’est pourquoi nous nous engageons à utiliser des
abrasifs issus de filières durables. Cela nous permet de limiter au maximum l’impact
sur les matières premières tout en préservant notre planète.</p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-16">
          Have questions? Contact us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>
        </p>
      </div>
    </div>
  );
};

export default Abrasifs;
