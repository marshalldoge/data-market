import React, {useEffect, useState} from "react";
import {
	BOOLEAN,
	BUTTON,
	COORDINATES, FIELDS,
	FORM_1,
	ICON,
	IMAGE,
	NUMBER,
	RICH_TEXT,
	STRING,
	TEXT,
	VIDEO,
	FILE, ARRAY
} from "../../statics/components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";
import {getSimpleEditorValue} from "../../utils/mapper";
import String from "./basic/String";
import Grid from '@mui/material/Grid';
import {objectMapper} from "../../utils/editorObjectMapper";

type editorProps = {

}

const Editor: React.FunctionComponent<editorProps> = ({}) => {
	const dispatch = useAppDispatch();
	const editor = useAppSelector((state: RootState) => state.editor);
	const [components, setComponents] = useState([] as any);
  const [dataIsArray, setDataIsArray] = useState(false);
  const [isArrayExpandable, setIsArrayExpandable] = useState(false);
  const objFromStore = getSimpleEditorValue(editor.object, editor.path);
  const isArrayAux = Array.isArray(objFromStore);

	useEffect(() => {
		const obj = getSimpleEditorValue(editor.object, editor.path);
		let newComponents = [] as any;
		console.log('Obj: ',obj);
		for(const [key, value] of Object.entries(obj)) {
			if(key[0] === "_") continue;
			//Put name first
			if(key === "name") {
				newComponents = [objectMapper(key, value, editor), ...newComponents];
			} else {
				newComponents.push(objectMapper(key, value, editor));
			}
		}
		setComponents(newComponents);
	},[editor.path, editor.object]);

	return (
		<Grid container>
			<Grid item xs={12}>
				{components}
			</Grid>
		</Grid>
  )
}
export default Editor;
