import React from 'react'

const GameComponent2 = ({ title, date, skills, description }) => {
    return (
        <div className='mb-20'>
            <div class="bg-base-200  pt-10 pb-10">

                <div class="flex justify-between">


                    <div class="w-150">

                        <div class="flex bg-primary p-2 mb-5 rounded-r-2xl justify-between items-center">
                            <h1 class="text-3xl">{title}</h1>
                            <div class="badge badge-soft badge-info mr-10">{date}</div>


                        </div>

                        <div className='prose prose-invert max-w-none whitespace-pre-line pl-2' dangerouslySetInnerHTML={{ __html: description }} />

                        <div class=" flex bg-primary mt-8 mb-4 mr-0 rounded-r-2xl pt-5 pb-5 gap-5  ">

                            <div class="flex flex-col gap-5 ml-3 ">

                                <div class=" flex gap-3.5 items-center card bg-base-100 w-20 h-20 p-1">

                                    <h1 className="text-l">Engine</h1>
                                    <img className="w-20" src="https://www.thegiftingteam.com/wp-content/uploads/2021/11/UnityLogo2021.png"
                                        alt="" />

                                </div>

                                <div class=" flex gap-1.5 items-center card bg-base-100 w-20 h-20 p-1">

                                    <h1 class="text-l">Platform</h1>
                                    <img class="w-12" src="https://img.icons8.com/ios11/512/FFFFFF/windows-11.png" alt="" />

                                </div>


                            </div>

                            <div class="">

                                <h1 class="text-2xl mb-2">Skills Learnt</h1>

                                <div class="flex flex-row flex-wrap gap-1 ">

                                    {skills.map((skill) => (
                                        <div class="badge badge-outline badge-primary-content">{skill}</div>

                                    ))}


                                </div>





                            </div>


                        </div>





                    </div>


                    <div class="mx-auto ">

                        <img src="public/battle Royale game.png " class="w-150 max-h-80 mt-20 rounded-xl " alt="" />

                        <div class="mt-20 flex flex-row gap-3 justify-center">

                            <button class="btn btn-soft btn-primary btn-xl w-50">GitHub</button>

                            <button class="btn btn-secondary btn-xl">Play on Itch.io</button>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default GameComponent2