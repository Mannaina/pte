import React from 'react';
import './Position.css'
class Input extends React.Component {
    render() {
        return (
            <div>
                <div className="position1"> 
                    <h3>Welcome To Online PTE Forms</h3>
                </div>
                <div className='fixed'>
                    <div>
                        Name <input type="text" />
                    </div>
                    <br />
                    <div>

                        Passport No.  <input type="text" />
                    </div>
                    <br />
                    <div>
                        Test Date <input type="date" />
                    </div>
                </div>
            </div>
        );

    }
}

export default Input;