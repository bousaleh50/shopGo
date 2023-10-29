import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import "../cardsComponents/style.css";

function CategoriesBar() {
    return (
        <div className='flex flex-col gap-6'>
            <div className='text-red-500 border-l-8 border-red-500'>
                <h2 className='ml-2'>categories</h2>
            </div>
            <div>
                <h1 className='text-3xl'>Browse By Category</h1>
            </div>
            <div className='flex gap-3 overflow-scroll cards md:gap-10'>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                <div className='flex flex-col items-center gap-3 border p-4 md:p-10 hover:drop-shadow-md hover:bg-red-500 hover:text-white'>
                  <PhoneIphoneOutlinedIcon/>
                  <p>Phones</p>
                </div>
                
            </div>
        </div>
    );
}

export default CategoriesBar;