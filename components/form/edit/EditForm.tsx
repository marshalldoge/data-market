import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useAppDispatch} from "../../../redux/hooks";
import {getFormData} from "../../../api/form";
import Form from "../Form";
import Editor from "../../editor/Editor";


type pageProps = {
	query: { id: string }
}

const EditForm: React.FunctionComponent<pageProps> = ({query}) => {
	const { id } = query;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFormData(id));
	},[]);

	return (
			<div>
				<Grid container direction={"row"} justifyContent={"center"}>
					<Grid item xs={8}>
						<Grid container direction={"row"} justifyContent={"center"}>
							Edit Form
						</Grid>
					</Grid>
					<Grid item xs={8}>
						<Editor/>
					</Grid>
				</Grid>
			</div>
	)
}

export default EditForm
