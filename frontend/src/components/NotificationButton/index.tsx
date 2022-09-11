import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn" onClick={() => window.alert("Idealmente, te seria enviado um SMS.")}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;