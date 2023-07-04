import React from 'react';
import CustomCard from '../../UI/CustomCard';

function ListMedicines({ mdata }) {
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-3 justify-content-between g-3'>
                            <CustomCard values={v} />
                        </div>

                    )
                })
            }

        </>
    );
}

export default ListMedicines;