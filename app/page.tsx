import Image from "next/image";
import Header from '@/app/components/MainHeader/page'
import  Sidebar from '@/app/components/Sidebar/page'
import  Homepage from '@/app/Home/page'
import  Jobe from '@/app/Findjobe/page'

import HotNetworkTags from '@/app/components/Rightsidebar/page'
export default function Home() {
  return (
    <>
    <Header/>
    <Sidebar/>
    </>
  );
}
