import { React, Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import img from '../assets/close-icon.png';
import {StyleSheet, css} from 'aphrodite';

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return(nextProps.length > this.listNotifications.length)
    }

    render() {
        return (
            <Fragment>
                <div className='menuItem'>
                    Your notifications
                </div>
                {this.props.displayDrawer &&
                    <div className={css(NotificationStyle.Notification)}>
                        <button
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                cursor: 'pointer',
                                border: 'none',
                                backgroundColor: 'transparent',
                            }}
                            aria-label='Close'
                            onClick={() => console.log('Close button has been clicked')}
                        >
                            <img style={{width: '15px'}} src={img} alt='close button' />
                        </button>
                        {this.props.listNotifications.length !== 0 ?
                            <Fragment>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {this.props.listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
                                    {this.props.listNotifications.map((val, idx) => {
                                    return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
                                     })}
                                </ul>
                            </Fragment> :
                            <ul>
                                <NotificationItem value="No new notification for now" />
                            </ul>
                        }
    
                    </div>
                }
            </Fragment>
        )
    }
}

const NotificationStyle = StyleSheet.create({
    Notification: {
        position: 'relative',
        border: '1.2px dashed red',
        padding: '.2rem .3rem',
        marginBottom: '1.5rem',
        "@media(max-width: 900px)" : {
            width: '100%',
            padding: 0,
            fontSize: 20,
        }
    }
})

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;