import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CompanyComponent.module.scss';
import path from '@constants/path';
import slugConvert from '@utils/convert/slugConvert';

const cx = classNames.bind(styles);

const CompanyComponent = ({ company }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('company-banner')}>
                    <a href={`${path.COMPANY_DETAIL}/${company.id}/${slugConvert(company.name)}`} className={cx('company-banner-link')}>
                        <div className={cx('company-banner-container')}>
                            <img src={company.banner} alt={company.name} className={cx('company-banner-image')} />
                        </div>
                        <div className={cx('company-logo-container')}>
                            <img src={company.logo} alt={company.name} className={cx('company-logo')} />
                        </div>
                    </a>
                </div>
                <div className={cx('company-info')}>
                    <h3 className={cx('company-info-name')}>
                        <a href={`${path.COMPANY_DETAIL}/${company.id}/${slugConvert(company.name)}`} className={cx('company-info-name-link')}>
                            {company.name}
                        </a>
                    </h3>
                    {company.company_short_description ? (
                        <div className={cx('company-info-description')}>
                            <span className={cx('company-info-description-text')}>{company.company_short_description}</span>
                        </div>
                    ) : (
                        <div className={cx('company-info-description')}></div>
                    )}
                </div>
            </div>
        </div>
    );
};

CompanyComponent.propTypes = {
    company: PropTypes.object.isRequired,
};

export default CompanyComponent;
