
import {FC, useEffect, useState} from "react";
import Image from "next/image";
import Head from "next/head";


const Home : FC = () => {

    const [query, setQuery] = useState({
        id : "",
        advice : "",
    })

    const getAdvice = async () => {

            setQuery({
                id : "",
                advice : "",

            })

            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            setQuery(data.slip);

    }

    useEffect(() => {
        getAdvice();
   }, [])

    const {id, advice} = query;


    return(

        <main className="min-h-screen max-w-screen bg-dark-blue flex justify-center items-center">
            <Head>

                <html lang="en"/>
                <meta name="theme-color" content="#221d52"/>
                <title>Advice Generator</title>
                <link rel="icon" href="/images/favicon.png"/>

            </Head>
            
            <article className="relative flex flex-col mx-6 my-4 justify-between items-center max-w-xl w-full sm:w-1/2 lg:w-1/3 h-auto min-h-72 
             bg-grayish-darkblue rounded-2xl p-8 text-center ">

                {id === "" && <div className="mt-14 loader-circle-4 spinner_top">
                    <div className="loader-circle-4 spinner_mid">
                        <div className="loader-circle-4 spinner_bot"></div>
                    </div>
                </div>}

                { id !== "" && <h1 className="text-xs wide-spacing neon-green">{"ADVICE #" + id }</h1>}
                { id !== "" && <h2 className="light-cyan text-xl sm:text-2xl lg:text-3xl block my-6">{"\"" + advice + "\""}</h2>}

                <div className="relative w-full h-5 mb-8">
                    <Image
                    src="/images/div-desktop.svg"
                    layout="fill"
                    alt="divider"/>
                </div>

                <button className="noSelect absolute -bottom-7 flex items-center justify-center bg-neon-green p-4 rounded-full green-shadow 
                transition-all duration-200 ease-in-out"
                onClick={() => getAdvice()}>
                    <Image
                    src="/images/icon-dice.svg"
                    width={25}
                    height={25}
                    alt="dice"

                    />
                </button>
            </article>

        </main>

    )



}

export default Home;