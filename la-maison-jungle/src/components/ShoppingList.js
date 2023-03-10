import {plantList} from '../datas/plantList';
import '../styles/ShoppingList.css';

const ShoppingList = () => {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='tjh-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='tjh-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className="tjh-sales">Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ShoppingList;