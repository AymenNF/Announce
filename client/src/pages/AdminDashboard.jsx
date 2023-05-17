import AdminCard from "../components/AdminCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AdminDashboard = () => {
  document.body.style.backgroundImage = "none";
  return (
    <div>
      <Header />
      <div class="py-10 px-4 grid grid-cols-4 gap-10">
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
      <Footer />
    </div>
  );
};
export default AdminDashboard;
