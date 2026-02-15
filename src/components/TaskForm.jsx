//form to add tasks

import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().min(3, 'Task title must be atleast 3 characters').required('Task title is required'),
  status: Yup.string().oneOf(['pending', 'In Progress', 'Donr'], 'Invalid status'),
  dueDate: Yup.string().nullable().optional(),
});

export function TaskForm({onAddTask}) {
  // const [title, setTitle] = useState("");

  const addTask = useTaskStore((state)=> state.addTask);

  const submission = async (values, resetForm) => {
    const newTask = {title: values.title, status: "pending"};
    console.log('adding............')
    await addTask(newTask);
    resetForm()
  }

  // const formik = useFormik({
  //   initialValues: {title: ""},
  //   validationSchema,
  //   onSubmit: async(values, {resetForm}) => {
  //     const newTask = { title: values.title, status: 'Pending'};
  //     await addTask(newTask); //calls backend via zustand
  //     resetForm();
  //   }
  // })

  // return (
  //   <form onSubmit={formik.handleSubmit}>
  //     <input name="title" id="name" type="text" placeholder="Enter task title" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  //     {formik.touched.title && formik.errors.title ? (
  //       <div style={{color: 'red'}}>{formik.errors.title}</div>
  //     ) : null}
  //     <button type="submit">Add Task</button>
  //   </form>
  // )

  return (
    <Formik initialValues={{title:"", status: "pending", dueDate: ""}} validationSchema={validationSchema} onSubmit={(values, {resetForm})=> submission(values, resetForm)}>
      {({isSubmitting}) => (
        <Form>
          <div>
            <Field type="text" name="title" placeholder="Enter title" />
            <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <Field as="select" name="status" placeholder="select status">
              <option value='pending'>Pending</option>
              <option value='In Progress'>In Progress</option>
              <option value='done'>Done</option>
            </Field>
            <ErrorMessage name="status" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <Field type="text" name="dueDate" placeholder="Enter dueDate" />
            <ErrorMessage name="dueDate" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={isSubmitting}>Add Task</button>
        </Form>
      )}
    </Formik>
  )
}