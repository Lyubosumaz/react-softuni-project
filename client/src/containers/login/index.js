import Title from '../../components/Title';
import Login from '../../components/Login';
import Info from '../../components/Info';

export default function LoginContainer() {
    return (
        <section className="form-container">
            <Title type={'form'} />
            <Login />
            <Info />
        </section>
    );
}
