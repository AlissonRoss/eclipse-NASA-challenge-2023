import './style.css';

export default function Eclipse() {
  return (
    <div className='header-spacer' id="eclipse">
      <div class='eclipse-animation'>
        <div className='scale'>To Scale</div>
        <div className='solar-eclipse'>Solar Eclipse</div>
        <div className='lunar-eclipse'>Lunar Eclipse</div>
        <div className='Sun-label'>⬆️ Sun<br/>387x further</div>
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