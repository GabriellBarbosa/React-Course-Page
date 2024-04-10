import Video from "../pages/Course/components/Video";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Complete lesson', () => {
    it('', () => {
        const completeLesson = jest.fn();
        render(
            <Video video_src="www.vimeo.com" completeLesson={completeLesson} />
        );

        const completeButton = screen.getByTestId('completeBtn');
        // fireEvent.ended(video);
        fireEvent.click(completeButton);

        expect(completeLesson).toHaveBeenCalled();
    })
})