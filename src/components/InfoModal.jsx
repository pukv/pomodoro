import "./InfoModal.css";

export default function InfoModal() {
  return (
    <>
      <div className="overlay"></div>
      <div className="info-modal">
        <>
          <h1>What is the Pomodoro Technique?</h1>
          <p>
            The Pomodoro technique is a simple time-management method designed
            to help you stay focused and advoid burnout.
          </p>
          <p>
            It breaks your work into short, intense intervals called{" "}
            <b>Pomodoros</b>, separated by brief breaks.
          </p>
        </>
        <>
          <h3>How It Works</h3>
          <ul>
            <li>25 minutes of focused work</li>
            <li>5 minutes of rest</li>
            <li>After 4 Pomodoros, take a longer break (15-20 minutes)</li>
          </ul>
          <p>
            Each cycle helps you maintain concentration while preventing mental
            fatigue.
          </p>
        </>
        <>
          <h3>Why It Works</h3>
          <ul>
            <li>it reduces procrastination</li>
            <li>helps you enter "deep work" faster</li>
            <li>encourages consistent breaks</li>
            <li>makes large tasks feel manageable</li>
            <li>improves productivity and focus</li>
            <li>prevents burnout by pacing your energy</li>
          </ul>
        </>
        <>
          <h3>Who Is It For?</h3>
          <p>Perfect for:</p>
          <ul>
            <li>studying</li>
            <li>programming</li>
            <li>writing</li>
            <li>creative work</li>
            <li>any task that requires sustained attention</li>
          </ul>
          <p>
            If you struggle with distractions or motivation, Pomodoro is one of
            the easiest systems to adopt - and one of the most effective.
          </p>
        </>
        <>
          <h3>How to Use This App</h3>
          <ol>
            <li>start a Pomodoro (work session)</li>
            <li>stay focused until the timer hits zero</li>
            <li>take your break</li>
            <li>repeat for a productive day</li>
          </ol>
        </>
      </div>
    </>
  );
}
