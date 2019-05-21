import React, {useState} from 'react'

//instruments
import {getStyles} from "../helpers";

export const Kinoafisha = () => {

    const [selectedFilter, setselectedFilter] = useState('upcoming');
    const [movies, setMovies] = useState([]);


    const _setSelectedFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

            setselectedFilter(nextFilter)
    }

    const styles = getStyles({
        selectedFilter
    })


    return (
        <>
            <div className='header'>
                <div className='logo'/>
                <div className="filters">
                    <div
                        className={styles.latestFilter}
                        data-name='latest'
                        onClick={_setSelectedFilter}
                    >
                        <span>Новинки {new Date().getFullYear()}</span>
                    </div>
                    <div
                        className={styles.upcomingFilter}
                        data-name='upcoming'
                        onClick={_setSelectedFilter}
                    >
                        <span>Cкоро в кинотеатрах {new Date().getFullYear()}</span>
                    </div>
                    <div
                        className={styles.popularFilter}
                        data-name='popular'
                        onClick={_setSelectedFilter}
                    >
                        <span>В топ-чартах {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </>


    )


}


// //core
// import React, {useState, useEffect} from 'react'
//
//
// //instruments
// import '../theme/init.scss'
// import {getStyles} from "../instruments";
// import {api} from "../API";
//
// export const Kinoafisha = () => {
//     const [selectedFilter, setSelectedFilter] = useState('upcoming');
//     const [movies, setMovies] = useState([]);
//
//     console.log(movies);
//
//     const _getMoviesByFilter = async (nextFilter) => {
//         const movies = await api.getMovies(nextFilter);
//         setMovies(movies);
//     }
//
//     const _setSelectedFilter = (event) => {
//         const nextFilter = event.currentTarget.dataset.name;
//         setSelectedFilter(nextFilter);
//     };
//
//
//     //componentDIDMOUNT + COMPONENTWILLUNMOUNT
// useEffect(()=>{
//     _getMoviesByFilter(selectedFilter)
// },[])
//
//     const styles = getStyles({
//         selectedFilter,
//     });
//
//
//     return (
//         <>
//             <div className='header'>
//                 <div className='logo'/>
//                 <div className="filters">
//                     <div className={styles.latestFilter} data-name='latest' onMouseOver={_setSelectedFilter}>
//                         <span>Новинки{new Date().getFullYear()}</span>
//                     </div>
//                     <div className={styles.upcomingFilter} data-name='upcoming' onMouseOver={_setSelectedFilter}>
//                         <span>Скоро В кинотетатрах</span>
//                     </div>
//                     <div className={styles.popularFilter} data-name='popular' onMouseOver={_setSelectedFilter}>
//                         <span>Популярные</span>
//                     </div>
//
//                 </div>
//
//             </div>
//         </>
//     )
// }
//
