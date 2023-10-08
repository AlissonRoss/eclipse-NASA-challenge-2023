import './style.css';

export default function Eclipse() {
  return (
    <div className='header-spacer' id="eclipse">
      <div class='eclipse-animation'>
        <div className='scale'>Solar & Lunar Eclipse<br/>(to scale)</div>
        <div className='Sun-Label'>⬆️ Sun<br/>387x further</div>
        <div className='Earth'>
          <div className='Moon-Orbit'>
            <div className='Moon'>
              <div className='Shadow'></div>
            </div>
          </div>
          <div className='Shadow'></div>
        </div>
      </div>
    </div>
  );
}