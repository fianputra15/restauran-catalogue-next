import Head from 'next/head'
import Image from 'next/image'
import RestaurantList from '../components/RestaurantList';
export default function Home(props) {
  const { restaurants } = props
  return (
    <div >
      <RestaurantList restaurants={restaurants} />
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  return {
    props: {
      restaurants
    }
  }
}
