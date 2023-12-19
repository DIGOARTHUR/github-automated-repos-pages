

import { ToastContainer } from 'react-toastify';
import  { useEffect, useState } from "react";
import { FiExternalLink } from 'react-icons/fi';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Card } from "../components/Card";
import { IconsData } from 'github-automated-repos';
import Loader from '../components/Loader';


export default function StackIcons() {

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = setTimeout(() => {
            setFinishedTimeout(true);
        }, 350);

        return () => clearTimeout(id);

    }, []);
    const { stackIcons } = IconsData();

    const [finishedTimeout, setFinishedTimeout] = useState(false);

    const [stackIconKeys, setStackIconKeys] = useState([]);
    const [stackIconValues, setStackIconValues] = useState([]);

    const [inicialStackIconKeys, setInicialStackIconKeys] = useState([]);
    const [inicialStackIconValues, setInicialStackIconValues] = useState([]);
    useEffect(() => {


        setStackIconKeys(Object.keys(stackIcons));
        setStackIconValues(Object.values(stackIcons));

        setInicialStackIconKeys(Object.keys(stackIcons));
        setInicialStackIconValues(Object.values(stackIcons));
    }, []);

    function _handleSearch(e) {
        if (!e.target.value) {
            setStackIconKeys(inicialStackIconKeys);
            setStackIconValues(inicialStackIconValues);
            return;
        }

        const filterStackIconKeys = inicialStackIconKeys.filter((values) => {
            return values.includes(e.target.value.toLowerCase());
        });
        setStackIconKeys(filterStackIconKeys);
        console.log(filterStackIconKeys);

        const filterStackIconValues = filterStackIconKeys.map((iconKey) => {
            return stackIcons[iconKey];
        });

        setStackIconValues(filterStackIconValues);
    }
    return (
        <div>
            <Header />
            <main className="">
                <Sidebar />

                <article className=" h-screen pt-8  mt-16 ml-[340px] px-6 pr-56 max-lg:ml-0 max-lg:pr-6  ">

                    <span>Stack Icons &#62;</span>

                    <h1 className="text-4xl mt-8  mb-2 max-md:text-4xl">Stack Icons</h1>
                    <hr />
                    <div className='mt-8'>
                        <input className=' bg-[#70708e33] w-full rounded-lg px-4 py-2 ' placeholder='🔍 Search Icons' type='text' onChange={_handleSearch} />
                    </div>
                    <ul className='mt-8 flex flex-wrap gap-4 justify-center'>


                        {

                            finishedTimeout == false ? (<Loader />) : (
                                stackIconValues.length > 0 ? (
                                    stackIconValues.map((item, index) => {
                                        return <Card key={index} item={item} iconKey={stackIconKeys[index]} />;
                                    })
                                ) : (
                                    <div className='flex flex-col m-auto gap-4'>
                                        <p className='text-xl text-center'>
                                            Didn&apos;t find your icon? <br /> Tell us about here:{' '}
                                            <a className='flex gap-2 text-[#00979C] justify-center' href='https://github.com/DIGOARTHUR/github-automated-repos/issues/new?assignees=&labels=&template=2-feature-request.yaml'>
                                                Feature Request <FiExternalLink />
                                            </a>
                                        </p>
                                        <img className='h-[350px]' src='https://user-images.githubusercontent.com/59892368/220364871-f553109d-855f-426a-bbe5-5e1c11278003.svg'></img>
                                    </div>
                                )

                            )
                        }



                    </ul>
                    <Footer />

                </article>

            </main>




            <ToastContainer />
        </div>
    )
}