import React from 'react'
import UE5_Logo from '../public/UnrealLogo.png'
import mobile from '../public/mobile.png'


const GameComponent1 = ({ title, date, skills, video, picture, github, itch, description, ytchannel, engine, platform, reverse }) => {
    return (
        <div className='mb-20'>
            <div class="bg-base-200 border border-base-content/20 rounded-lg pt-10 pb-10 ">

                <div class={`flex ${reverse ? "flex-row-reverse": "flex-row" } justify-between`}>

                    {/*Image/Video - Github Links Section */}


                    <div class="mx-auto ">

                        {/* <video muted autoPlay loop  controls className='max-h-80'  src="./public/Dance.mp4">
                        
                        </video> */}

                        {
                            video ? <iframe className='rounded-2xl'
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                                : <img src={picture} class="w-150 max-h-80 mt-20 rounded-xl object-cover " alt="" />

                        }


                        {/* <img src="public/battle Royale game.png " class="w-150 max-h-80 mt-20 rounded-xl " alt="" /> */}

                        <div class="mt-20 flex flex-row gap-3 justify-center">

                            {
                                github &&
                                <a href={github} target="_blank" rel="noopener">

                                    <button class="btn btn-soft btn-primary btn-xl w-50">GitHub</button>

                                </a>
                            }

                            {
                                itch &&

                                <a href={itch} target="_blank" rel="noopener">

                                    <button class="btn btn-secondary btn-xl">Play on Itch.io</button>

                                </a>
                            }

                            {
                                ytchannel &&
                                <a href={ytchannel} target="_blank" rel="noopener">

                                    <button class="btn btn-accent btn-xl">Youtube Channel</button>

                                </a>
                            }


                        </div>

                    </div>


                    {/*Title - Description Section */}
                   

                    <div class="w-150">

                        <div class={`flex bg-primary p-2 mb-5 ${reverse? "rounded-r-2xl" :"rounded-l-2xl"}  justify-between items-center`}>
                            <h1 class="text-3xl font-bold">{title}</h1>
                            <div class="badge badge-soft badge-info mr-10">{date}</div>


                        </div>

                        <div className={`prose prose-invert max-w-none ${reverse? "p-2" :""} whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: description }} />


                        <div class={`flex bg-primary mt-8 mr-0 ${reverse? "rounded-r-2xl" :"rounded-l-2xl"}  pt-5 pb-5 gap-5 `}>

                            <div class="flex flex-col gap-5 ml-3 ">

                                <div class=" flex gap-1 items-center card bg-base-100 w-20 h-20 p-1">

                                    <h1 className="text-l">Engine</h1>

                                    {
                                        engine == "Unity"

                                            ?
                                            <img className="w-20 pt-1.5" src="https://www.thegiftingteam.com/wp-content/uploads/2021/11/UnityLogo2021.png"
                                                alt="" />

                                            : <img className="w-9 pt-1" src={UE5_Logo}
                                                alt="" />
                                    }




                                </div>

                                <div class=" flex gap-1.5 items-center card bg-base-100 w-20 h-20 p-1">

                                    <h1 class="text-l">Platform</h1>

                                    {
                                        platform == "Windows"
                                            ?
                                            <img class="w-12" src="https://img.icons8.com/ios11/512/FFFFFF/windows-11.png" alt="" />

                                            :
                                            <img class="w-9" src={mobile} alt="" />


                                    }


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


                </div>

            </div>
        </div>
    )
}

export default GameComponent1