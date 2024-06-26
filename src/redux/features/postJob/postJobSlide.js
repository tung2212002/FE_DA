import { createSlice } from '@reduxjs/toolkit';

import randomId from '@utils/randomId';
import { getLocalBusiness } from '@utils/authStorage/authBusinessStorage';

const initialState = {
    postJob: {
        title: '',
        min_salary: 0,
        max_salary: 0,
        salary_type: 'VND',
        locations: [
            {
                id: randomId(),
                province: -1,
                district: [
                    {
                        id: randomId(),
                        district: -1,
                        description: '',
                    },
                ],
            },
        ],
        gender_requirement: 'other',
        job_description: '',
        job_requirement: '',
        job_benefit: '',
        employment_type: 'full_time',
        deadline: '',
        full_name_contact: getLocalBusiness()?.full_name,
        phone_number_contact: getLocalBusiness()?.phone_number,
        email_contact: [getLocalBusiness()?.email],
        campaign_id: '',
        quantity: 1,
        categories: [],
        working_time: [],
        working_time_text: '',
        must_have_skills: [],
        should_have_skills: [],
        job_location: '',
        type_job: [],
        job_experience_id: -1,
        job_position_id: -1,
    },
    loading: false,
    error: {
        title: false,
        job_description: false,
        salary: false,
        location: false,
        job_requirement: false,
        job_benefit: false,
        deadline: false,
        full_name_contact: false,
        phone_number_contact: false,
        email_contact: false,
        campaign_id: false,
        quantity: false,
        categories: false,
        working_time: false,
        working_time_text: false,
        must_have_skills: false,
        should_have_skills: false,
        recruitment_position_title: false,
        type_job: false,
        job_location: false,
        job_experience_id: false,
        job_position_id: false,
    },
};

const postJobSlice = createSlice({
    name: 'postJob',
    initialState,
    reducers: {
        setPostJob: (state, action) => {
            state.postJob = action.payload;
        },
        setTitleJob: (state, action) => {
            state.postJob.title = action.payload;
        },
        setJobDescription: (state, action) => {
            state.postJob.job_description = action.payload;
        },
        setMinSalary: (state, action) => {
            state.postJob.min_salary = action.payload;
        },
        setMaxSalary: (state, action) => {
            state.postJob.max_salary = action.payload;
        },
        setSalaryType: (state, action) => {
            state.postJob.salary_type = action.payload;
        },
        setGenderRequirement: (state, action) => {
            state.postJob.gender_requirement = action.payload;
        },
        addLocation: (state) => {
            state.postJob.locations.push({
                id: randomId(),
                province: -1,
                district: [
                    {
                        id: randomId(),
                        district: -1,
                        description: '',
                    },
                ],
            });
        },
        removeLocation: (state, action) => {
            state.postJob.locations = state.postJob.locations.filter((location) => location.id !== action.payload);
        },
        setProvince: (state, action) => {
            state.postJob.locations = state.postJob.locations.map((location) =>
                location.id === action.payload.id ? { ...location, province: action.payload.province } : location,
            );
        },
        refreshProvince: (state, action) => {
            state.postJob.locations = state.postJob.locations.map((location) =>
                location.id === action.payload.id
                    ? {
                          ...location,
                          district: [
                              {
                                  id: randomId(),
                                  district: -1,
                                  description: '',
                              },
                          ],
                      }
                    : location,
            );
        },
        addDistrict: (state, action) => {
            state.postJob.locations = state.postJob.locations.map((location) =>
                location.id === action.payload.id
                    ? {
                          ...location,
                          district: [
                              ...location.district,
                              {
                                  id: randomId(),
                                  district: -1,
                                  description: '',
                              },
                          ],
                      }
                    : location,
            );
        },
        removeDistrict: (state, action) => {
            state.postJob.locations = state.postJob.locations.map((location) =>
                location.id === action.payload.id
                    ? {
                          ...location,
                          district: location.district.filter((district) => district.id !== action.payload.districtId),
                      }
                    : location,
            );
        },
        setDistrict: (state, action) => {
            state.postJob.locations = state.postJob.locations.map((location) =>
                location.id === action.payload.id
                    ? {
                          ...location,
                          district: location.district.map((district) =>
                              district.id === action.payload.districtId ? { ...district, ...action.payload.district } : district,
                          ),
                      }
                    : location,
            );
        },
        setTypesJob: (state, action) => {
            state.postJob.type_job = action.payload;
        },
        setCategories: (state, action) => {
            state.postJob.categories = action.payload;
        },
        setCampaignId: (state, action) => {
            state.postJob.campaign_id = action.payload;
        },
        setQuantity: (state, action) => {
            state.postJob.quantity = action.payload;
        },
        setDeadline: (state, action) => {
            state.postJob.deadline = action.payload;
        },
        setJobLocation: (state, action) => {
            state.postJob.job_location = action.payload;
        },
        setEmploymentType: (state, action) => {
            state.postJob.employment_type = action.payload;
        },
        setJobRequirement: (state, action) => {
            state.postJob.job_requirement = action.payload;
        },
        setJobBenefit: (state, action) => {
            state.postJob.job_benefit = action.payload;
        },
        setFullNameContact: (state, action) => {
            state.postJob.full_name_contact = action.payload;
        },
        setPhoneNumberContact: (state, action) => {
            state.postJob.phone_number_contact = action.payload;
        },
        setEmailContact: (state, action) => {
            state.postJob.email_contact = action.payload;
        },
        setWorkingTime: (state, action) => {
            state.postJob.working_time = state.postJob.working_time.map((time) => (time.id === action.payload.id ? { ...time, ...action.payload } : time));
        },
        addWorkingTime: (state) => {
            state.postJob.working_time.push({
                id: randomId(),
                date_from: 1,
                date_to: 5,
                start_time: '',
                end_time: '',
            });
        },
        removeWorkingTime: (state, action) => {
            state.postJob.working_time = state.postJob.working_time.filter((time) => time.id !== action.payload);
        },
        setWorkingTimeText: (state, action) => {
            state.postJob.working_time_text = action.payload;
        },
        setJobExperienceId: (state, action) => {
            state.postJob.job_experience_id = action.payload;
        },
        setJobPositionId: (state, action) => {
            state.postJob.job_position_id = action.payload;
        },
        setMustHaveSkills: (state, action) => {
            state.postJob.must_have_skills = action.payload;
        },
        addMustHaveSkills: (state, action) => {
            state.postJob.must_have_skills.push(action.payload);
        },
        removeMustHaveSkills: (state, action) => {
            state.postJob.must_have_skills = state.postJob.must_have_skills.filter((item) => item !== action.payload);
        },
        setShouldHaveSkills: (state, action) => {
            state.postJob.should_have_skills = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = {
                ...state.error,
                ...action.payload,
            };
        },
    },
});

export const {
    setPostJob,
    setTitleJob,
    setJobDescription,
    setMinSalary,
    setMaxSalary,
    setSalaryType,
    addLocation,
    removeLocation,
    setProvince,
    refreshProvince,
    addDistrict,
    removeDistrict,
    setDistrict,
    setTypesJob,
    setCampaignId,
    setQuantity,
    setDeadline,
    setJobLocation,
    setEmploymentType,
    setJobRequirement,
    setJobBenefit,
    setFullNameContact,
    setPhoneNumberContact,
    setEmailContact,
    setWorkingTime,
    setWorkingTimeText,
    setJobExperienceId,
    setJobPositionId,
    addMustHaveSkills,
    removeMustHaveSkills,
    addWorkingTime,
    removeWorkingTime,
    setGenderRequirement,
    setShouldHaveSkills,
    setMustHaveSkills,
    setCategories,
    setLoading,
    setError,
} = postJobSlice.actions;

export default postJobSlice.reducer;

export const selectPostJob = (state) => state.postJob.postJob;

export const selectLoading = (state) => state.postJob.loading;

export const selectError = (state) => state.postJob.error;
