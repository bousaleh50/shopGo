import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function UserSubIcons({className}) {
    return (
        <>
            <div className={className}>
                <Link to="/cart" className='flex gap-4'>
                    <ShoppingCartOutlinedIcon className='hover:text-red-500'/>
                    <span className='sm:hidden'>Cart</span>
                </Link>
                <Link className='flex gap-4'>
                  <FavoriteBorderOutlinedIcon className='hover:text-red-500'/>
                  <span className='sm:hidden'>Favorite</span>
                </Link>
            </div>
        </>
    );
}

export default UserSubIcons;