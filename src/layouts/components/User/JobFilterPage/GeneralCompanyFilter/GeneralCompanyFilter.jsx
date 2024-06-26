import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './GeneralCompanyFilter.module.scss';
import slugConvert from '@utils/convert/slugConvert';
import path from '@constants/path';
import GeneralJobFilter from '../GeneralJobFilter/GeneralJobFilter';
import { getListJobSerivce } from '@services/user/jobService';
import { getCompanyByIdSerivce } from '@services/user/companyService';

const cx = classNames.bind(styles);

const GeneralCompanyFilter = ({ id = 579, limit }) => {
    const [company, setCompany] = useState(null);
    const [listJob, setListJob] = useState([]);

    useEffect(() => {
        const params = {
            company_id: id,
            limit: limit ? limit : 5,
        };
        getListJobSerivce(params)
            .then((res) => {
                if (res.status === 200) {
                    setListJob(res.data.data.jobs);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getCompanyByIdSerivce(id)
            .then((res) => {
                if (res.status === 200) {
                    setCompany(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {company && (
                <div className={cx('container')}>
                    <div className={cx('banner')}>
                        <a
                            href={`${path.COMPANY_DETAIL}/${company.id}/${slugConvert(company.name)}`}
                            className={cx('banner-img')}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={company?.banner} alt={company?.name} />
                        </a>
                    </div>

                    <div className={cx('info')}>
                        <div className={cx('company-info')}>
                            <div className={cx('logo')}>
                                <a href={`${path.COMPANY_DETAIL}/${company.id}/${slugConvert(company.name)}`} target="_blank" rel="noreferrer">
                                    <img src={company?.logo} alt={company?.name} />
                                </a>
                            </div>
                            <div className={cx('name')}>
                                <a href={`${path.COMPANY_DETAIL}/${company.id}/${slugConvert(company.name)}`} target="_blank" rel="noreferrer">
                                    {company?.name}
                                </a>
                            </div>
                        </div>
                        <div className={cx('job-list')}>
                            {listJob.map((item, index) => (
                                <div key={index} className={cx('job-item')}>
                                    <GeneralJobFilter job={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

GeneralCompanyFilter.propTypes = {
    id: PropTypes.number,
    limit: PropTypes.number,
};

export default GeneralCompanyFilter;
