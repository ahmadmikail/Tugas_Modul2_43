import React from "react";

function Card(proprs) {
    return (
        <div className="bg-white shadow">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Anggota Kelompok 43
                </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden grouphover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                src={proprs.content.image}
                alt="Foto"
                className="w-full h-full object-center object-cover lg:wfull lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between"><div>
            <h4 className="mt-1 text-sm text-gray500">Hobi : {proprs.content.hobby}</h4>
            <h4 className="mt-1 text-sm text-gray500">Motto Hidup : {proprs.content.motto}</h4>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    )
}

export default Card;