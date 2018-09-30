import React from 'react';

class Subsection extends React.Component {

    render() {
        return(
            <div className="subsection">
                <ul>
                    <li><button>Женская одежда</button></li>
                    <li><button>Мужская одежда</button></li>
                    <li><button>Аксессуары</button></li>
                </ul>
            </div>
        )
    }

}

export default Subsection;