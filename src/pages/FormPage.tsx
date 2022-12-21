import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonInput,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonRouter
} from "@ionic/react"

const FormPage: React.FC = () => {
	const router = useIonRouter()

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons>
						<IonBackButton>Back</IonBackButton>
					</IonButtons>
					<IonTitle>Form</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<form
					onSubmit={(e) => {
						e.preventDefault()

						router.push("/link")
					}}
				>
					<IonInput required />
					<button>Submit</button>
				</form>
			</IonContent>
		</IonPage>
	)
}

export default FormPage
