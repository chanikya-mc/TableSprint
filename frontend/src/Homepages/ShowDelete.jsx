import ReactDOM from 'react-dom';
import DeleteItem from './DeleteItem';

export const ShowDelete = (message, onConfirm, onCancel) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const handleConfirm = () => {
    onConfirm();
    cleanup();
  };

  const handleCancel = () => {
    onCancel();
    cleanup();
  };

  const cleanup = () => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  };

  ReactDOM.render(
    <DeleteItem message={message} onConfirm={handleConfirm} onCancel={handleCancel} />,
    div
  );
};
