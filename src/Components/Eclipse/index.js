import './style.css';

export default function Eclipse() {
  return (
    <div className='header-spacer' id="eclipse">
      <div class='eclipse-animation'>
        <div className='scale'>Eclipse<br/>(to scale)</div>
        <div className='Sun'>Sun<br/>387x further</div>
        <div className='Earth'>
          <div className='Moon-Orbit'>
            <div className='Moon'>
              <div className='Shadow'></div>
            </div>
          </div>
          <div className='Shadow'></div>
        </div>
        <button onClick={
          function(e){
            e.currentTarget.parentElement.classList.toggle('lunar-eclipse');

            // Restart animation cycles
            e.currentTarget.parentElement.classList.remove('eclipse-animation');
            setTimeout((elem) => {
              elem.classList.add('eclipse-animation');
            }, 1, e.currentTarget.parentElement);
          }
        }>Switch</button>
      </div>
    </div>
  );
}