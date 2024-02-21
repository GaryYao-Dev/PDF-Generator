import { Fields, PersonalDetail } from '@/types/Fields'
import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    personalDetail: <PersonalDetail>{},
    summary: '',
    skill: <Fields[]>[],
    profession: <Fields[]>[],
    education: <Fields[]>[],
    project: <Fields[]>[],
  },
  reducers: {
    load: (state, action) => {
      const data = action.payload
      Object.keys(data).forEach((key) => {
        state[key as keyof typeof state] = data[key]
      })
    },
    updatePersonalDetail: (state, action) => {
      state.personalDetail = action.payload
    },
    updateSummary: (state, action) => {
      state.summary = action.payload
    },
    // addSkill: (state, action) => {
    //   const current = state.skills
    //   const newSkill = [...current, action.payload]
    //   state.skills = newSkill
    // },
    // deleteSkill: (state, action) => {
    //   state.skills.splice(action.payload, 1)
    // },
    // updateSkill: (state, action) => {
    //   state.skills = action.payload
    // },
    addSkill: (state, action) => {
      const current = state.skill
      const newSkill = [...current, action.payload]
      state.skill = newSkill
    },
    deleteSkill: (state, action) => {
      state.skill.splice(action.payload, 1)
    },
    updateSkill: (state, action) => {
      state.skill[action.payload.index] = action.payload.data
      state.skill[action.payload.index].editMode = false
    },
    addProfession: (state, action) => {
      const current = state.profession
      const newProfession = [...current, action.payload]
      state.profession = newProfession
    },
    deleteProfession: (state, action) => {
      state.profession.splice(action.payload, 1)
    },
    updateProfession: (state, action) => {
      state.profession[action.payload.index] = action.payload.data
      state.profession[action.payload.index].editMode = false
    },
    addEducation: (state, action) => {
      const current = state.education
      const newEducation = [...current, action.payload]
      state.education = newEducation
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1)
    },
    updateEducation: (state, action) => {
      state.education[action.payload.index] = action.payload.data
      state.education[action.payload.index].editMode = false
    },
    addProject: (state, action) => {
      const current = state.project
      const newProject = [...current, action.payload]
      state.project = newProject
    },
    deleteProject: (state, action) => {
      state.project.splice(action.payload, 1)
    },
    updateProject: (state, action) => {
      state.project[action.payload.index] = action.payload.data
      state.project[action.payload.index].editMode = false
    },
  },
})

export const {
  load,
  updatePersonalDetail,
  addSkill,
  deleteSkill,
  updateSkill,
  addProfession,
  deleteProfession,
  updateProfession,
  addEducation,
  deleteEducation,
  updateEducation,
  addProject,
  deleteProject,
  updateProject,
  updateSummary,
} = dataSlice.actions

const dataReducer = dataSlice.reducer

export default dataReducer
