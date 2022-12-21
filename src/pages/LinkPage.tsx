import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonRouterLink,
	IonTitle,
	IonToolbar
} from "@ionic/react"

const LinkPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton>Back</IonBackButton>
					</IonButtons>
					<IonTitle>Link</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonRouterLink routerLink="/form/1">Go</IonRouterLink>
			</IonContent>
		</IonPage>
	)
}

export default LinkPage
