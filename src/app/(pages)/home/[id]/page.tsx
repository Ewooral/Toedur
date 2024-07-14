'use client'
import { Main_One } from '@/app/ui/homepage/body-content/Main_One';
import { Main_Two } from '@/app/ui/homepage/body-content/Main_Two';
import { Main_Default } from '@/app/ui/homepage/body-content/Main_Default';
import { useParams } from 'next/navigation';


const HomePage = () => {
  const { id } = useParams();

  switch (id) {
    case '1':
      return <Main_One id={id} />;
    case '2':
      return <Main_Two id={id} />;
    default:
      return <Main_Default id={''} />;
  }

};

export default HomePage;