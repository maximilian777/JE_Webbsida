import ProjectNavBar from "../components/project_navbar/project_navbar";
import "./project_layout.css";

export default function ProjectLayout({ title, heroImage, meta, children }) {
  return (
    <div className="project-page">
      {heroImage && (
        <div 
          className="project-hero" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
      )}

      <div className="project-layout">
        <div className="project-inner">

          <ProjectNavBar />

          <article className="project-article fadeIn delay1">

            <div className="project-headerCard">
              <h1 className="project-title">{title}</h1>
              
              {meta && (
                <div className="project-meta">
                  {meta.client && <div><strong>Kund:</strong> {meta.client}</div>}
                  {meta.start && <div><strong>Start:</strong> {meta.start}</div>}
                  {meta.end && <div><strong>Slut:</strong> {meta.end}</div>}
                  {meta.investering && <div><strong>Investering:</strong> {meta.investering}</div>}
                </div>
              )}
            </div>
            <div className="project-content fadeIn delay2">
              {children}
            </div>

          </article>

        </div>
      </div>
    </div>
  );
}