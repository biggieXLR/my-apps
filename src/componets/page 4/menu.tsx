import React from "react";
const Menu=()=>{

  return (
    <div className="h-fit bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}


        {/* Popular Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
             Menu Categories
          </h2>
          
          <div className="space-y-3">
            {[
              "Popular",
              "Jollof Rice & Entrees",
              "Swallow & Soups", 
              "Grills & sides",
              "Beverages",
              "Desserts"
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
              >
                <span className="text-gray-700 group-hover:text-orange-600">
                  {category}
                </span>
                <span className="text-gray-400 group-hover:text-orange-600">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;