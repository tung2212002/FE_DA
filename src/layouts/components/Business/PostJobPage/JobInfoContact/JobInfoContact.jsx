import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './JobInfoContact.module.scss';
import { selectError, selectPostJob, setEmailContact, setFullNameContact, setPhoneNumberContact } from '@redux/features/postJob/postJobSlide';
import { selectUser } from '@redux/features/authUser/authSlide';
import randomId from '@utils/randomId';
import { InputSelectorMultiOptionComponent } from '@components/common';

const cx = classNames.bind(styles);

const JobInfoContact = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const job = useSelector(selectPostJob);
    const error = useSelector(selectError);

    const listEmail = [
        {
            id: randomId(),
            value: user?.email,
        },
    ];

    const handleSetFullNameContact = (e) => {
        dispatch(setFullNameContact(e.target.value));
    };

    const handleSetPhoneNumberContact = (e) => {
        dispatch(setPhoneNumberContact(e.target.value));
    };

    const handleSetEmailContact = (value) => {
        dispatch(setEmailContact(value));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-title')}>
                <h6 className={cx('title')}>Thông tin nhận CV</h6>
            </div>
            <div className={cx('box-content-flex')}>
                <div className={cx('box-content-group')}>
                    <label className={cx('label')} htmlFor="job-title">
                        Họ và tên người nhận
                        <span className={cx('required')}>*</span>
                    </label>
                    <div className={cx('input-box')}>
                        <div className={cx('input-box-item')}>
                            <input
                                type="text"
                                className={cx('input')}
                                id="job-title"
                                value={job.full_name_contact}
                                placeholder="Nhập tên người nhận CV"
                                onChange={handleSetFullNameContact}
                            />
                        </div>
                        {error.full_name_contact && (
                            <div className={cx('input-box-feedback')}>
                                <div className={cx('feedback-text')}>Tên người nhận CV không được để trống</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('box-content-group')}>
                    <label className={cx('label')} htmlFor="job-phone">
                        Số điện thoại
                        <span className={cx('required')}>*</span>
                    </label>
                    <div className={cx('input-box')}>
                        <div className={cx('input-box-item')}>
                            <input
                                type="text"
                                className={cx('input')}
                                id="job-phone"
                                value={job.phone_number_contact}
                                placeholder="Nhập số điện thoại người nhận CV"
                                onChange={handleSetPhoneNumberContact}
                            />
                        </div>
                        {error.phone_number_contact && (
                            <div className={cx('input-box-feedback')}>
                                <div className={cx('feedback-text')}>Số điện thoại người nhận CV không được để trống</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('box-content-group')}>
                <label className={cx('label')} htmlFor="job-email-cv">
                    Email nhận hồ sơ <i>(Tối đa 5 email)</i>
                    <span className={cx('required')}>*</span>
                </label>
                <div className={cx('input-box')}>
                    <InputSelectorMultiOptionComponent
                        placeholder={''}
                        options={job.email_contact}
                        defaultValue={job.email_contact[0] || user?.email}
                        defaultOptions={listEmail}
                        value={job.email_contact}
                        setValue={handleSetEmailContact}
                        styleInput={{ paddingTop: '7px', paddingBottom: '7px' }}
                        maxOption={3}
                    />
                </div>
                {error.email_contact && (
                    <div className={cx('input-box-feedback')}>
                        <div className={cx('feedback-text')}>Email người nhận CV không được để trống</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobInfoContact;
