import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShieldIcon from '@mui/icons-material/Shield';

function Services() {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className='bg-gray-500 p-2 rounded-full text-white'>
                       <div className='bg-black rounded-full p-4'>
                         <LocalShippingIcon className=''/>
                       </div>
                    </div>
                    <h3 className='text-2xl font-medium'>Free And Fast Delivery</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className='bg-gray-500 p-2 rounded-full text-white'>
                        <div className='bg-black rounded-full p-4'>
                           <SupportAgentIcon className=""/>
                        </div>
                    </div>
                    <h3 className='text-2xl font-medium'>24/7 customer service</h3>
                    <p>friendly 24/7 customer suport</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className='bg-gray-500 p-2 rounded-full text-white'>
                        <div className='bg-black rounded-full p-4'>
                            <ShieldIcon className=""/>
                        </div>
                    </div>
                    <h3 className='text-2xl font-medium'>money back guarantee</h3>
                    <p>We return money whithin 30 day's</p>
                </div>
            </div>
        </div>
    );
}

export default Services;