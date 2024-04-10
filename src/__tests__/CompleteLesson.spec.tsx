import Video from "../pages/Course/components/Video";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Complete lesson', () => {
    it('completeLesson if its not completed', () => {
        const completeLesson = jest.fn();
        render(
            <Video 
                video_src="www.vimeo.com"
                isCompleted={false}
                completeLesson={completeLesson} 
            />
        );

        const completeButton = screen.getByTestId('completeBtn');
        fireEvent.click(completeButton);

        expect(completeLesson).toHaveBeenCalled();
    });

    it('not completeLesson if its already completed', () => {
        const completeLesson = jest.fn();
        render(
            <Video 
                video_src="www.vimeo.com"
                isCompleted={true}
                completeLesson={completeLesson} 
            />
        );

        const completeButton = screen.getByTestId('completeBtn');
        fireEvent.click(completeButton);

        expect(completeLesson).not.toHaveBeenCalled();
    });
})