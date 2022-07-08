export const ListBody = (stepModal) => {

    const test = (
        <div>
            <div className='ul_text_container'>
                <ul className=''>
                    <li className=' py-4 px-5'>نمونه متن</li>
                    <li className=' py-4 px-5'>نمونه متن</li>
                </ul>
                <ul className='mr-[117px]'>
                    <li className=' py-4 px-5'>نمونه متن</li>
                    <li className=' py-4 px-5'>نمونه متن</li>
                </ul>
            </div>
        </div>
    );

    switch (stepModal) {
        case 3:
            return test;
        case 4:
            return test;
        case 5:
            return test;
        default:
            break;
    }
}