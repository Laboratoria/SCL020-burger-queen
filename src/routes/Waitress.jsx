import menudataJson from '../menudata.json';
import Sizes from '../components/waitress/Sizes';
import Menu from '../components/waitress/Menu';
import Pedido from '../components/waitress/Pedido';
// import Switch from '../components/waitress/switch';

const Waitress = () => {
	const data = menudataJson.menuOptions;

	return (
		<main className='flex justify-around items-start w-screen h-screen'>
			<div className='flex justify-around items-center w-2/5'>
				<div>
					<Menu data={data}/>
					<Sizes/>
				</div>
				<Pedido/>
			</div>
		</main>
	);
};

export default Waitress;
