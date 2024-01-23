import { useState } from 'react'

// Importacion del CSS
import './ComponenteFollow.css'

function ComponenteFollow({children, username, initialIsFollowing}) {
    
    // Variable de state para comprobar estado
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    // Texto del btn Follow Unfollow
    const text_follow = isFollowing? "Siguiendo":"Seguir"

    // Caracteristica de la clase en caso de Follow o Unfollow
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    // Cambiar de estado de isFollowing
    const clickFollowUnfollow = () => {
        setIsFollowing(!isFollowing)
      }

    // Render del componente
    return (
             <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img
                    className='tw-followCard-avatar'
                    alt={`El avatar de ${username}`}
                    src={`https://unavatar.io/${username}`}
                    />
                    <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{username}</span>
                    </div>
                </header>

                <aside>
                    <button className={buttonClassName} onClick={clickFollowUnfollow}>
                    <span className='tw-followCard-text'>{text_follow}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                    </button>
                </aside>
            </article>
    )
}

export default ComponenteFollow