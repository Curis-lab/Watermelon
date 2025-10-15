
function FormHandler({ template }) {
  const onChangeHandler =()=>{}
  const onSubmit = () => {console.log('submit')};
  return (
    <form onSubmit={onSubmit}>
        {template(onChangeHandler)}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandler;
