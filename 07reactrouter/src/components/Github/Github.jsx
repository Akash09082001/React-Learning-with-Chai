import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://api.github.com/users/ibran1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []); // Remove [data] from the dependency array

    return (
        <section className='flex w-full h-screen items-center justify-center bg-gray-300'>
            <div className="flex flex-col w-full items-center justify-center max-w-7xl mx-auto">
                {data ? (
                    <>

                        <div className="flex p-5 w-full gap-5 max-w-xl mx-auto bg-white rounded-xl">
                            <div className="flex flex-col gap-5 w-1/2">
                                <div className="flex w-full h-fit rounded-md shadow-md">
                                    <img src={data.avatar_url} alt="" className='flex w-full h-full object-contain rounded-md' />
                                </div>
                                <div className="flex w-full">
                                    <strong className='flex w-full items-center justify-center text-2xl text-orange-700'>
                                        {data.name}
                                    </strong>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-1/2">
                                <div className="grid grid-cols-1 gap-3 w-full">
                                    <div className="flex flex-col gap-3 w-full items-center justify-center text-xl">
                                        <strong className='text-xl flex'>Followers :</strong>
                                        <span className='flex w-fit text-4xl font-bold'>{data.followers}</span>
                                    </div>
                                    <div className="flex w-full items-center justify-center text-xl">
                                        <strong>Following :</strong>
                                        <span className='flex w-fit text-4xl font-bold'>{data.following}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}

export default Github;
