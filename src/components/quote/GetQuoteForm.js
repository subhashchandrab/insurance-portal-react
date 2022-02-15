import Card from '../ui/Card';
import classes from './GetQuoteForm.module.css';

function GetQuoteForm() {
  function submitHandler(event) {
    event.preventDefault();

    
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Brand</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Variant</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Registration City</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Registration Year</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.actions}>
          <button>Get Quote</button>
        </div>
      </form>
    </Card>
  );
}

export default GetQuoteForm;
