import { createSlice } from '@reduxjs/toolkit';

import randomId from '../../../utils/randomId';

const initialState = {
    postJob: {
        title: '',
        job_description: '',
        min_salary: '',
        max_salary: '',
        salary_type: '',
        location: [
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
        job_requirement: '',
        job_benefit: '',
        employment_type: 'fulltime',
        deadline: '',
        full_name_contact: '',
        phone_number_contact: '',
        campaign_id: '',
        quantity: 1,
        categories: '',
        working_time: [
            {
                id: randomId(),
                date_from: -1,
                date_to: -1,
                start_time: '',
                end_time: '',
            },
        ],
        working_time_text: '',
        must_have_skills: [],
        should_have_skills: [],
        recruitment_position_title: '',
        type_job: [],
        job_experience: -1,
        position_level: -1,
    },
    loading: false,
    error: null,
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
        addLocation: (state) => {
            state.postJob.location.push({
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
            state.postJob.location = state.postJob.location.filter((location) => location.id !== action.payload);
        },
        setProvince: (state, action) => {
            state.postJob.location = state.postJob.location.map((location) =>
                location.id === action.payload.id ? { ...location, province: action.payload.province } : location,
            );
        },
        refreshProvince: (state, action) => {
            state.postJob.location = state.postJob.location.map((location) =>
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
            state.postJob.location = state.postJob.location.map((location) =>
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
            state.postJob.location = state.postJob.location.map((location) =>
                location.id === action.payload.id
                    ? {
                          ...location,
                          district: location.district.filter((district) => district.id !== action.payload.districtId),
                      }
                    : location,
            );
        },
        setDistrict: (state, action) => {
            state.postJob.location = state.postJob.location.map((location) =>
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
        setCampaignId: (state, action) => {
            state.postJob.campaign_id = action.payload;
        },
        setQuantity: (state, action) => {
            state.postJob.quantity = action.payload;
        },
        setDeadline: (state, action) => {
            state.postJob.deadline = action.payload;
        },
        setRecruitmentPositionTitle: (state, action) => {
            state.postJob.recruitment_position_title = action.payload;
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
        setWorkingTime: (state, action) => {
            state.postJob.working_time = state.postJob.working_time.map((time) => (time.id === action.payload.id ? { ...time, ...action.payload } : time));
        },
        addWorkingTime: (state) => {
            state.postJob.working_time.push({
                id: randomId(),
                date_from: -1,
                date_to: -1,
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
        setJobExperience: (state, action) => {
            state.postJob.job_experience = action.payload;
        },
        setPostionLevel: (state, action) => {
            state.postJob.position_level = action.payload;
        },
        addMustHaveSkills: (state, action) => {
            state.postJob.must_have_skills.push(action.payload);
        },
        removeMustHaveSkills: (state, action) => {
            state.postJob.must_have_skills = state.postJob.must_have_skills.filter((item) => item !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
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
    setRecruitmentPositionTitle,
    setEmploymentType,
    setJobRequirement,
    setJobBenefit,
    setFullNameContact,
    setPhoneNumberContact,
    setWorkingTime,
    setWorkingTimeText,
    setJobExperience,
    setPostionLevel,
    addMustHaveSkills,
    removeMustHaveSkills,
    addWorkingTime,
    removeWorkingTime,
    setLoading,
    setError,
} = postJobSlice.actions;

export default postJobSlice.reducer;

export const selectPostJob = (state) => state.postJob.postJob;