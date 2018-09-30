import React from 'react';

class Section extends React.Component {

    render() {
        return(
            <div className="section">
                <ul>
                    <li><button>Одежда и аксессуары</button></li>
                    <li><button>Обувь</button></li>
                    <li><button>Украшения</button></li>
                    <li><button>Красота и здоровье</button></li>
                    <li><button>Товары для дома</button></li>
                    <li><button>Товары для кухни</button></li>
                </ul>
            </div>
        )
    }

}

export default Section;