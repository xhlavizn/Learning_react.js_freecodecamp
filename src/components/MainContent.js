import React from "react";
import ContactCard from "./ContactCard";
import Funnyman from "./Funnyman";
import Catalogue from "./Catalogue";
import ToDoList from "./ToDoList";
import ClickMe from "./ClickMe";
import ChangePlease from "./ChangePlease";
import Loading from "./Loading";
import ApiExercise from "./ApiExercise";
import NameForm from "./Forms"
import EssayForm from "./Forms";
import TravelForm from "./Form/TravelForm"


export default function MainContent() {
  const firstname = "Tonda";
  const lastname = "Hlavizňa";

  return (
    <div>
      <main>
        <h1> This is {firstname + " " + lastname}´s test </h1>
        
        <div>
          <TravelForm />
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        <div>
          <ApiExercise />
        </div>

        <div>
          <EssayForm />
        </div>
        
        <div className="todolist">
          <ToDoList />
        </div>
        <div>
          <ContactCard
            name="Křeček obecný"
            imgUrl="https://img.ihned.cz/attachment.php/820/74776820/bsQyV4Wiq2E1A0v3L7epM8KcrkhCUB6J/jarvis_5e7dd887498e75f6a39d2dff.jpeg"
            phone="+420 123 456 789"
            email="abcd@adfadf.cz"
          />

          <ContactCard
            name="Křečci army edition"
            imgUrl="https://2.bp.blogspot.com/-2mLpM9qesmU/Tb9fxDkFWpI/AAAAAAAAAA8/k4v2645znr0/s1600/images-18.jpeg"
            phone="+420 564 876 333"
            email="zavolejmidokasina@kvalitne.cz"
          />
        </div>

        <div>
          <Funnyman />
        </div>

        <div>
          <Catalogue />
        </div>

        <div>
          <ClickMe />
        </div>
        <div>
          <ChangePlease />
        </div>
        <div>
          <Loading />
        </div>


      </main>
    </div>
  );
}
